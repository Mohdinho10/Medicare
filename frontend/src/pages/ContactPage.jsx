function ContactPage() {
  return (
    <section>
      <div className="mx-auto max-w-screen-md px-4">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="text__para mb-8 text-center font-light lg:mb-16">
          Got a technical issue? Want to send feedback about a beta feature let
          us know.
        </p>

        <form className="space-y-8">
          <div>
            <label htmlFor="email" className="form__label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="form__input mt-1"
            />
          </div>

          <div>
            <label htmlFor="subject" className="form__label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Let us know how we can help you"
              className="form__input mt-1"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="form__label">
              Your Message
            </label>
            <textarea
              rows="6"
              type="text"
              id="message"
              placeholder="Leave a comment..."
              className="form__input mt-1"
            />
          </div>
          <button className="btn rounded sm:w-fit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;
