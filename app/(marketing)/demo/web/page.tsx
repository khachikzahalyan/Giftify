export default function WebDemoPage() {
  return (
    <div className="container-custom mt-16">
      <h2 className="text-3xl font-bold mb-8">Web Demo</h2>

      <div className="card text-center">
        <p className="mb-4 text-gray-400">
          Click below to explore live demo:
        </p>

        <a
          href="https://www.giftify.am/"
          target="_blank"
          className="bg-purple-600 px-6 py-3 rounded-xl"
        >
          Open Web Demo
        </a>
      </div>
    </div>
  );
}
