import React, { useEffect, useState } from 'react';
import { FileType, User } from 'lucide-react';
import PageTitle from '../components/UI/PageTitle';
import Card, { CardContent } from '../components/UI/Card';
import { supabase } from '../lib/supabase';

interface Upload {
  id: string;
  created_at: string;
  title: string;
  description: string;
  type: string;
  file_url: string;
  status: string;
  user_id: string;
}

interface Pledge {
  id: string;
  created_at: string;
  name: string;
  email: string;
  pledge_type: string;
  reflection: string;
  user_id: string;
}

const Admin: React.FC = () => {
  const [uploads, setUploads] = useState<Upload[]>([]);
  const [pledges, setPledges] = useState<Pledge[]>([]);
  const [activeTab, setActiveTab] = useState<'uploads' | 'pledges'>('uploads');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    checkAdminStatus();
    if (isAdmin) {
      fetchData();
    }
  }, [isAdmin]);

  const checkAdminStatus = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: profile } = await supabase
          .from('users')
          .select('role')
          .eq('id', user.id)
          .single();

        setIsAdmin(profile?.role === 'admin');
      }
    } catch (err) {
      console.error('Error checking admin status:', err);
      setIsAdmin(false);
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch uploads with user information
      const { data: uploadsData, error: uploadsError } = await supabase
        .from('uploads')
        .select('*, users:user_id(email)')
        .order('created_at', { ascending: false });

      if (uploadsError) throw uploadsError;
      setUploads(uploadsData || []);

      // Fetch pledges with user information
      const { data: pledgesData, error: pledgesError } = await supabase
        .from('pledges')
        .select('*, users:user_id(email)')
        .order('created_at', { ascending: false });

      if (pledgesError) throw pledgesError;
      setPledges(pledgesData || []);

    } catch (err: any) {
      setError('Failed to fetch data. Please try again.');
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (uploadId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('uploads')
        .update({ status: newStatus })
        .eq('id', uploadId);

      if (error) throw error;

      // Refresh the uploads list
      fetchData();
    } catch (err) {
      console.error('Error updating status:', err);
      setError('Failed to update status. Please try again.');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (!isAdmin) {
    return (
      <div className="max-w-4xl mx-auto">
        <PageTitle 
          title="Access Denied" 
          subtitle="You do not have permission to view this page."
        />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <PageTitle 
        title="Admin Dashboard" 
        subtitle="Manage project uploads and climate action pledges."
      />

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          onClick={() => setActiveTab('uploads')}
          className={`py-2 px-4 font-heading font-medium text-sm sm:text-base transition-colors ${
            activeTab === 'uploads'
              ? 'border-b-2 border-primary-600 text-primary-700'
              : 'text-gray-600 hover:text-primary-600'
          }`}
        >
          Project Uploads
        </button>
        <button
          onClick={() => setActiveTab('pledges')}
          className={`py-2 px-4 font-heading font-medium text-sm sm:text-base transition-colors ${
            activeTab === 'pledges'
              ? 'border-b-2 border-primary-600 text-primary-700'
              : 'text-gray-600 hover:text-primary-600'
          }`}
        >
          Climate Pledges
        </button>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading data...</p>
        </div>
      ) : error ? (
        <div className="bg-red-50 p-4 rounded-lg">
          <p className="text-red-700">{error}</p>
        </div>
      ) : (
        <>
          {/* Uploads Tab */}
          {activeTab === 'uploads' && (
            <div className="grid gap-6">
              {uploads.length === 0 ? (
                <Card>
                  <CardContent>
                    <div className="text-center py-6">
                      <FileType className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">No project uploads yet.</p>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                uploads.map((upload) => (
                  <Card key={upload.id}>
                    <CardContent>
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-heading font-semibold text-xl text-primary-700 mb-2">
                            {upload.title}
                          </h3>
                          <p className="text-gray-600 mb-4">{upload.description}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>Type: {upload.type}</span>
                            <select
                              value={upload.status}
                              onChange={(e) => handleStatusChange(upload.id, e.target.value)}
                              className="border border-gray-300 rounded px-2 py-1"
                            >
                              <option value="pending">Pending</option>
                              <option value="approved">Approved</option>
                              <option value="rejected">Rejected</option>
                            </select>
                            <span>Uploaded: {formatDate(upload.created_at)}</span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <a
                            href={upload.file_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-primary-50 text-primary-600 rounded-md hover:bg-primary-100 transition-colors"
                          >
                            View File
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          )}

          {/* Pledges Tab */}
          {activeTab === 'pledges' && (
            <div className="grid gap-6">
              {pledges.length === 0 ? (
                <Card>
                  <CardContent>
                    <div className="text-center py-6">
                      <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">No climate pledges yet.</p>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                pledges.map((pledge) => (
                  <Card key={pledge.id}>
                    <CardContent>
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-heading font-semibold text-xl text-primary-700 mb-2">
                            {pledge.name}
                          </h3>
                          <p className="text-gray-600 mb-2">
                            Pledge: {pledge.pledge_type}
                          </p>
                          {pledge.reflection && (
                            <p className="text-gray-600 mb-4">
                              Reflection: {pledge.reflection}
                            </p>
                          )}
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>Email: {pledge.email}</span>
                            <span>Date: {formatDate(pledge.created_at)}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Admin;