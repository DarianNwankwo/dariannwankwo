import { createMedia } from "@artsy/fresnel";


const QueryBreakpoints = createMedia({
  breakpoints: {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  },
});


// Generates css to be injected into the head
export const mediaStyles = QueryBreakpoints.createMediaStyle();
export const { Media, MediaContextProvider } = QueryBreakpoints;