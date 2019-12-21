import React, { Fragment, useEffect } from "react";
import Prism from "prismjs";
function Modal() {
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <Fragment>
      <h3>Modal</h3>
      <p>
        <a class="button" href="#modal1">
          Open modal
        </a>
      </p>
      <p>
        <a class="button" href="#modal2">
          Show another
        </a>
      </p>

      <div id="modal1" class="modal">
        <div>
          <h2>
            Modal with close button
            <a className="button" href="#">
              &times;
            </a>
          </h2>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque euismod, sem eu varius pretium, ligula nisl blandit
              tellus, porttitor scelerisque nisi nisi vitae dui. Vivamus ut
              vestibulum libero. Donec enim ante, aliquet sit amet vestibulum
              ut, accumsan ac augue. Maecenas id nisl faucibus, venenatis nunc
              vel, varius quam. Aenean egestas viverra enim, non efficitur felis
              porta quis. Duis ut porttitor dui, vel elementum elit. Integer
              aliquam ligula id ligula pulvinar, nec ultrices tortor egestas.
              Cras eget urna vitae orci vulputate eleifend sit amet at nunc. Sed
              et ultrices est. Aliquam id sollicitudin nibh. Vivamus
              pellentesque nibh ligula, nec consequat ex commodo vitae. Praesent
              mauris nisl, dictum id bibendum a, elementum at ex. Suspendisse
              luctus commodo velit, et porttitor odio auctor quis. Vestibulum in
              urna purus. Donec fermentum dui sapien, id sodales est elementum
              sit amet. Fusce ultrices purus eget nunc tristique, a vulputate
              nunc rhoncus. Vestibulum bibendum mauris nec tellus facilisis
              semper. Nulla sed purus mollis eros imperdiet bibendum. Integer
              interdum tristique enim id rutrum. Morbi ultricies urna turpis, et
              elementum sapien maximus et. Mauris non tempus lectus. Fusce
              laoreet diam nulla, efficitur tincidunt massa efficitur vel.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Ut at ipsum vel purus maximus pellentesque.
              Sed eu nibh a sapien imperdiet condimentum eget eget nisi. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Fusce eu aliquet erat, et sodales nisi.
              Pellentesque facilisis massa at faucibus ullamcorper. Fusce
              sodales non ligula id faucibus. Curabitur euismod lectus tellus,
              vitae gravida diam sodales id. Fusce porttitor accumsan bibendum.
              Nunc iaculis arcu nec justo sollicitudin consequat. In viverra
              dictum vestibulum. Cras et tortor tortor. Ut iaculis urna at erat
              pharetra porttitor. Suspendisse fringilla aliquet lorem pharetra
              eleifend. Suspendisse metus libero, malesuada sed viverra in,
              suscipit et tellus. Donec auctor eros vel molestie tincidunt. Sed
              placerat ut augue id interdum. Aenean lobortis magna vel
              ullamcorper efficitur. Ut fermentum neque sit amet euismod
              pulvinar. Ut non nulla dapibus, pharetra lacus vel, venenatis
              lectus. Etiam neque odio, pellentesque sit amet mauris sed,
              suscipit maximus elit. Vivamus non blandit odio. Nullam enim
              velit, pellentesque id ligula ultricies, rhoncus hendrerit dolor.
              Aenean faucibus luctus laoreet. Aliquam sagittis, urna gravida
              vulputate pulvinar, lorem risus placerat libero, sed viverra dui
              urna sit amet libero. Mauris sed varius leo, in rhoncus magna.
              Suspendisse lacinia, lorem eu tempor vestibulum, augue quam
              commodo odio, sit amet condimentum risus mauris at tortor. Sed
              efficitur blandit iaculis. Maecenas tempus nulla eget eleifend
              commodo. Curabitur leo orci, dictum quis est ac, porta gravida
              lacus. Pellentesque blandit id libero sagittis luctus. In interdum
              elit fermentum odio laoreet congue. Suspendisse potenti. Nunc ac
              libero id lacus fringilla tristique. Pellentesque facilisis nibh
              justo. Proin luctus dignissim massa ac volutpat. Nam pharetra
              turpis eget faucibus tincidunt. Praesent venenatis sapien mi, non
              convallis enim mattis in. Cras eleifend ullamcorper lectus
              imperdiet congue. Integer a neque quis nisi mollis condimentum eu
              ac risus. Duis non cursus eros. Maecenas ac suscipit sem, at
              iaculis diam. Vivamus elementum aliquam neque in fermentum.
              Praesent at tristique libero, vel ultrices nibh. Nam cursus risus
              at est vestibulum placerat. Morbi eget arcu a risus efficitur
              vehicula.
            </p>
          </div>
        <button>Submit</button>
        </div>
      </div>

      <div id="modal2" class="modal">
        <a class="cancel" href="#"></a>
        <div>
          <h2>Click outside to close</h2>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque euismod, sem eu varius pretium, ligula nisl blandit
              tellus, porttitor scelerisque nisi nisi vitae dui. Vivamus ut
              vestibulum libero. Donec enim ante, aliquet sit amet vestibulum
              ut, accumsan ac augue. Maecenas id nisl faucibus, venenatis nunc
              vel, varius quam. Aenean egestas viverra enim, non efficitur felis
              porta quis. Duis ut porttitor dui, vel elementum elit. Integer
              aliquam ligula id ligula pulvinar, nec ultrices tortor egestas.
              Cras eget urna vitae orci vulputate eleifend sit amet at nunc. Sed
              et ultrices est. Aliquam id sollicitudin nibh. Vivamus
              pellentesque nibh ligula, nec consequat ex commodo vitae. Praesent
              mauris nisl, dictum id bibendum a, elementum at ex. Suspendisse
              luctus commodo velit, et porttitor odio auctor quis. Vestibulum in
              urna purus. Donec fermentum dui sapien, id sodales est elementum
              sit amet. Fusce ultrices purus eget nunc tristique, a vulputate
              nunc rhoncus. Vestibulum bibendum mauris nec tellus facilisis
              semper. Nulla sed purus mollis eros imperdiet bibendum. Integer
              interdum tristique enim id rutrum. Morbi ultricies urna turpis, et
              elementum sapien maximus et. Mauris non tempus lectus. Fusce
              laoreet diam nulla, efficitur tincidunt massa efficitur vel.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Ut at ipsum vel purus maximus pellentesque.
              Sed eu nibh a sapien imperdiet condimentum eget eget nisi. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Fusce eu aliquet erat, et sodales nisi.
              Pellentesque facilisis massa at faucibus ullamcorper. Fusce
              sodales non ligula id faucibus. Curabitur euismod lectus tellus,
              vitae gravida diam sodales id. Fusce porttitor accumsan bibendum.
              Nunc iaculis arcu nec justo sollicitudin consequat. In viverra
              dictum vestibulum. Cras et tortor tortor. Ut iaculis urna at erat
              pharetra porttitor. Suspendisse fringilla aliquet lorem pharetra
              eleifend. Suspendisse metus libero, malesuada sed viverra in,
              suscipit et tellus. Donec auctor eros vel molestie tincidunt. Sed
              placerat ut augue id interdum. Aenean lobortis magna vel
              ullamcorper efficitur. Ut fermentum neque sit amet euismod
              pulvinar. Ut non nulla dapibus, pharetra lacus vel, venenatis
              lectus. Etiam neque odio, pellentesque sit amet mauris sed,
              suscipit maximus elit. Vivamus non blandit odio. Nullam enim
              velit, pellentesque id ligula ultricies, rhoncus hendrerit dolor.
              Aenean faucibus luctus laoreet. Aliquam sagittis, urna gravida
              vulputate pulvinar, lorem risus placerat libero, sed viverra dui
              urna sit amet libero. Mauris sed varius leo, in rhoncus magna.
              Suspendisse lacinia, lorem eu tempor vestibulum, augue quam
              commodo odio, sit amet condimentum risus mauris at tortor. Sed
              efficitur blandit iaculis. Maecenas tempus nulla eget eleifend
              commodo. Curabitur leo orci, dictum quis est ac, porta gravida
              lacus. Pellentesque blandit id libero sagittis luctus. In interdum
              elit fermentum odio laoreet congue. Suspendisse potenti. Nunc ac
              libero id lacus fringilla tristique. Pellentesque facilisis nibh
              justo. Proin luctus dignissim massa ac volutpat. Nam pharetra
              turpis eget faucibus tincidunt. Praesent venenatis sapien mi, non
              convallis enim mattis in. Cras eleifend ullamcorper lectus
              imperdiet congue. Integer a neque quis nisi mollis condimentum eu
              ac risus. Duis non cursus eros. Maecenas ac suscipit sem, at
              iaculis diam. Vivamus elementum aliquam neque in fermentum.
              Praesent at tristique libero, vel ultrices nibh. Nam cursus risus
              at est vestibulum placerat. Morbi eget arcu a risus efficitur
              vehicula.
            </p>
          </div>
        </div>
      </div>

      <pre>
        <code className="lang-html">
          {`

<a class="button" href="#modal2">Show another</a>
<a class="button" href="#modal1">Open modal</a>
<div id="modal1" class="modal">
<div>
  <h2>
    Modal with close button
    <a className="button" href="#">
      &times;
    </a>
  </h2>
  <div>
    ...
  </div>
<button>Submit</button>
</div>
</div>

<div id="modal2" class="modal">
  <a class="cancel" href="#"></a>
  <div>
    <h2>Click outside to close</h2>
    <div>
    ...
    </div>
  </div>
</div>

          `.trim()}
        </code>
      </pre>
    </Fragment>
  );
}

export default Modal;
