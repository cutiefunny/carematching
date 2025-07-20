import withPWA from "@ducanh2912/next-pwa";

const nextConfig = {
    reactStrictMode: true,
    images: {
    domains: ['placehold.co'], // 여기에 placehold.co를 추가합니다.
  },
};

export default withPWA({
  dest: "public",
})(nextConfig);
