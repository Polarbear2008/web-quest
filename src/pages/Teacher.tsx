import React from 'react';

const TeacherPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-primary-800 mb-8">Teacher's Guide</h1>
      
      {/* Objectives Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary-700 mb-4">Objectives</h2>
        <p className="text-gray-700 mb-4">By the end of this WebQuest, students will be able to:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Identify common online risks such as phishing, cyberbullying, and unsafe websites</li>
          <li>Explain the importance of keeping personal information private online</li>
          <li>Evaluate the safety of websites, messages, and online behaviors using a checklist</li>
          <li>Create an engaging and informative Internet Safety Toolkit to share with peers</li>
          <li>Demonstrate responsible digital citizenship through scenario-based decision-making activities</li>
        </ul>
      </section>

      {/* Prerequisites Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary-700 mb-4">Student Prerequisites</h2>
        <p className="text-gray-700 mb-4">Students should have:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Basic computer and internet navigation skills (e.g., how to open a browser, click a link, type into a search bar)</li>
          <li>Familiarity with online tools like Google Docs or Microsoft Word</li>
          <li>Basic understanding of personal information (e.g., full name, address, photos) and why it's sensitive</li>
        </ul>
      </section>

      {/* Preparation Tips */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary-700 mb-4">Preparation Tips</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Ensure all computers or tablets are charged and connected to the internet</li>
          <li>Bookmark or pre-load the curated resource links in the Resources section</li>
          <li>Print out any worksheets, graphic organizers, or the reflection sheet if needed</li>
          <li>Review and project the WebQuest homepage or assign it through your LMS (e.g., Google Classroom)</li>
          <li>Group students in pairs or small teams if working collaboratively</li>
        </ul>
      </section>

      {/* Implementation Tips */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary-700 mb-4">Implementation Tips</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Introduce the topic with a short discussion or video on why internet safety matters</li>
          <li>Monitor progress during each stage of the Process section; check in at each milestone or checkpoint</li>
          <li>Use the rubric to help students self-assess or peer-review before submission</li>
          <li>Support diverse learners by offering sentence starters, extra time, and tech help as needed</li>
          <li>Encourage open discussion around tricky scenarios—there are no "perfect" answers, but thoughtful reasoning should be praised</li>
        </ul>
      </section>

      {/* Standards Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary-700 mb-4">ISTE Standards Alignment</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium text-primary-600 mb-2">1. Empowered Learner (1a, 1c)</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Students articulate and set personal learning goals, leveraging technology to seek feedback that informs and improves their practice</li>
              <li>They use technology to demonstrate their learning in a variety of ways</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium text-primary-600 mb-2">2. Digital Citizen (2a, 2b, 2d)</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Students cultivate and manage their digital identity and reputation and understand the permanence of their actions online</li>
              <li>They engage in positive, safe, legal, and ethical behavior when using technology</li>
              <li>They manage their personal data to maintain digital privacy and security</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium text-primary-600 mb-2">3. Creative Communicator (6a, 6b)</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Students choose appropriate platforms and tools to create and communicate their ideas effectively</li>
              <li>They create original works or responsibly repurpose digital content to communicate their learning</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Curriculum Standards */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary-700 mb-4">Curriculum Standards</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium text-primary-600 mb-2">Uzbekistan EFL Curriculum (Grades 8-11)</h3>
            <p className="text-gray-700"><strong>Standard:</strong> Use of technology and media in communication and learning</p>
            <p className="text-gray-700"><strong>Objective:</strong> Learners understand the use of digital tools for learning and responsible communication</p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-primary-600 mb-2">UNESCO Media and Information Literacy (MIL) Competencies</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Evaluate the reliability of digital information</li>
              <li>Understand rights and responsibilities in digital environments</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium text-primary-600 mb-2">Common Core Anchor Standards (ELA-Literacy)</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>CCSS.ELA-LITERACY.W.6.6: Use technology to produce and publish writing</li>
              <li>CCSS.ELA-LITERACY.SL.6.5: Include multimedia components in presentations</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeacherPage;