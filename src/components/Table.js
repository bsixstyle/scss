import React, { Fragment, useEffect } from "react";
import Prism from "prismjs";
function Table() {
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <Fragment>
      <h3>Table</h3>
      <hr />
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Brand</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="#">1</td>
            <td data-label="Brand">Microsoft</td>
            <td data-label="Action">
              <button>Edit</button>
              <button className="danger">Delete</button>
            </td>
          </tr>
          <tr>
            <td data-label="#">2</td>
            <td data-label="Brand">Google</td>
            <td data-label="Action">
              <button>Edit</button>
              <button className="danger">Delete</button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td data-label="#"></td>
            <td data-label="Brand">
              <input type="text" placeholder="text" />
            </td>
            <td data-label="Action">
              <button>Add</button>
            </td>
          </tr>
        </tfoot>
      </table>
      <br />
      <pre>
        <code className="lang-html">
          {`
<table>
    <tr>
      <td>#</td>
      <td>Brand</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Microsoft</td>
    </tr>
</table>
`.trim()}
        </code>
      </pre>

      <h2>Responsive</h2>
      <table class="responsive">
        <tr>
          <th>#</th>
          <th>Brand</th>
          <th>Action</th>
        </tr>
        <tr>
          <td data-label="#">1</td>
          <td data-label="Brand">Google</td>
          <td data-label="Action">
            <button>Edit</button>
            <button className="danger">Delete</button>
          </td>
        </tr>
      </table>
      <pre>
        <code className="lang-html">
          {`
<table class="responsive">
  <tr>
    <td>#</td>
    <td>Brand</td>
    <td>Action</td>
  </tr>
  <tr>
    <td data-label="#">1</td>
    <td data-label="Brand">Google</td>
    <td data-label="Action">
      <button>Edit</button>
      <button className="danger">Delete</button>
    </td>
  </tr>
</table>
`.trim()}
        </code>
      </pre>
    </Fragment>
  );
}

export default Table;
