function Contact() {
  return (
    <section className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 desktop:w-1/3 mobile:w-full mobile:px-4 mobile:max-w-3xl">
      <div className="px-2 mx-auto">
        <form
          action="mailto:lathanakshathra83@gmail.com"
          method="POST"
          encType="text/plain"
          className="space-y-8"
        >
          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Your email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="your@mail.com"
              className="block w-full p-2.5 text-sm text-gray-800 bg-gray-50 rounded-lg border"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              required
              placeholder="Describe your subject"
              className="block w-full p-3 text-sm text-gray-800 bg-gray-50 rounded-lg border"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Your message
            </label>
            <textarea
              name="message"
              rows={6}
              placeholder="Leave a comment..."
              className="block w-full p-2.5 text-sm text-gray-800 bg-gray-50 rounded-lg border"
            />
          </div>

          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-white rounded-lg bg-gray-700"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
