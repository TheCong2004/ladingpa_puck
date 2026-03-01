// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",      // Các file trong thư mục app
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Các file trong thư mục components
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",   // THÊM DÒNG NÀY nếu bạn để Sidebar trong thư mục layout
  ],
  theme: {
    extend: {
      // Giữ đúng hệ thống font và màu bạn đã yêu cầu
      fontSize: {
        'h1': ['32px', { fontWeight: '700' }],
        'h2': ['24px', { fontWeight: '600' }],
        'h3': ['20px', { fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.6' }],
        'caption': ['14px', { lineHeight: '1.5' }],
      },
      borderRadius: {
        'xl': '12px', // Bo góc mềm mại
      }
    },
  },
  plugins: [],
};
export default config;