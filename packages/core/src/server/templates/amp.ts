import { Template } from "../../types";

const template: Template = ({ html }) => `<!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="generator" content="Frontity">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
      </head>
      <body>
        ${html}
      </body>
    </html>`;

export default template;