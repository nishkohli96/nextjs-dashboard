// app/terms/page.tsx

export const metadata = {
  title: 'Terms & Conditions',
  description: 'Please read our terms and conditions before using the dashboard.',
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

      <p className="mb-4">
        Welcome to our dashboard. These terms and conditions outline the rules and regulations for the use of our application.
      </p>

      <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing this website, we assume you accept these terms and conditions. Do not continue to use the dashboard if you do not agree to all of the terms stated on this page.
      </p>

      <h2 className="text-xl font-semibold mb-2">2. Modifications</h2>
      <p className="mb-4">
        We reserve the right to revise these terms at any time without notice. By using this website you are agreeing to be bound by the then-current version of these terms.
      </p>

      <h2 className="text-xl font-semibold mb-2">3. Usage License</h2>
      <p className="mb-4">
        You may use this dashboard solely for your personal or internal business purposes, subject to these terms.
      </p>

      <p className="text-sm text-gray-500 mt-12">Last updated: June 10, 2025</p>
    </main>
  );
}
