

// import { defineConfig } from "@lovable.dev/vite-tanstack-config";


// export default defineConfig({
//   tanstackStart: {
 
//     server: { entry: "server" },
//   },
// });

// @lovable.dev/vite-tanstack-config already includes plugins.
// Do NOT add duplicate plugins manually.

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },

  nitro: {
    preset: "netlify",
  },
});
