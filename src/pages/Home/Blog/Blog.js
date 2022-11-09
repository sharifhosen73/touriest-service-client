import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Difference between SQL and NoSQL?</h2>
          <p>
            The five critical differences between SQL vs NoSQL are: 1. SQL
            databases are relational, NoSQL databases are non-relational. <br />
            2 .SQL databases use structured query language and have a predefined
            schema. NoSQL databases have dynamic schemas for unstructured data.{" "}
            <br />
            3. SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable. <br />
            4. SQL databases are table-based, while NoSQL databases are
            document, key-value, graph, or wide-column stores. <br />
            5. SQL databases are better for multi-row transactions, while NoSQL
            is better for unstructured data like documents or JSON.
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>

      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">What is JWT, and how does it work?</h2>
          <p>
            JWTs differ from other web tokens in that they contain a set of
            claims. Claims are used to transmit information between two parties.
            What these claims are depends on the use case at hand. For example,
            a claim may assert who issued the token, how long it is valid for,
            or what permissions the client has been granted.
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>

      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            What is the difference between javascript and NodeJS?
          </h2>
          <p>
            1. NodeJS : NodeJS is a cross-platform and opensource Javascript
            runtime environment that allows the javascript to be run on the
            server-side. Nodejs allows Javascript code to run outside the
            browser. Nodejs comes with a lot of modules and mostly used in web
            development. <br />
            2. JavaScript : Javascript is a Scripting language. It is mostly
            abbreviated as JS. It can be said that Javascript is the updated
            version of the ECMA script. Javascript is a high-level programming
            language that uses the concept of Oops but it is based on prototype
            inheritance.{" "}
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>

      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            How does NodeJS handle multiple requests at the same time?
          </h2>
          <p>
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them.{" "}
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
