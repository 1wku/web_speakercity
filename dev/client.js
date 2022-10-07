import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "z8395xip",
  dataset: "production",
  useCdn: true, // `false` if you want to ensure fresh data
});
