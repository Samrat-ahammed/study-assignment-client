const Faq = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold text-center bg-green-200 py-2 rounded-lg">
        Some Question And Answer
      </h2>
      <div className="space-y-4">
        <div className="collapse collapse-arrow bg-green-300">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            What is mongo db database?
          </div>
          <div className="collapse-content">
            <p>
              MongoDB is a popular NoSQL (non-relational) database management
              system that is designed for flexibility, scalability, and the
              efficient handling of unstructured or semi-structured data.
              MongoDBs name is derived from humongous due to its ability to
              handle very large volumes of data.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-green-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">What is jwt?</div>
          <div className="collapse-content">
            <p>
              JWT stands for JSON Web Token. It is a compact, self-contained way
              to represent information between parties in a form that is easy to
              verify and secure. JWTs are used for authentication and
              authorization in web applications and are widely used in modern
              web development. Here are the key characteristics of JWTs:
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-green-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What is reactjs?
          </div>
          <div className="collapse-content">
            <p>
              React, often referred to as ReactJS, is an open-source JavaScript
              library for building user interfaces. It is maintained by Facebook
              and a community of individual developers and companies. React is
              particularly well-suited for creating single-page applications and
              user interfaces for web and mobile applications.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-green-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What is javaScript?
          </div>
          <div className="collapse-content">
            <p>
              JavaScript is a high-level, dynamic, and versatile programming
              language that is primarily used for adding interactivity and
              behavior to web pages. It is an essential part of web development
              and is supported by all modern web browsers, allowing developers
              to create dynamic and interactive web applications.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-green-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">What is web?</div>
          <div className="collapse-content">
            <p>
              The World Wide Web, commonly referred to as the web, is a system
              of interconnected documents and resources that are accessible over
              the internet. It was created by Sir Tim Berners-Lee in 1989 and
              has become a fundamental part of the internet. Users access web
              content through web browsers like Google Chrome, Mozilla Firefox,
              or Microsoft Edge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
