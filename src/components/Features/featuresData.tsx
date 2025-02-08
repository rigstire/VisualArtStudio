// featuresData.tsx
import { Feature } from "@/types/feature";

export const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      // Paint palette icon
      <svg
        width="40"
        height="40"
        viewBox="0 0 64 64"
        className="fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M32,2C15.432,2,2,15.432,2,32c0,12.422,7.65,23.19,18.667,28.166C22.667,60.166,24,59,24,57.5c0-1-0.833-3.833-1.833-5.167C16,48.333,12,40.5,12,32 C12,20.954,20.954,12,32,12s20,8.954,20,20c0,8.5-4,16.333-10.167,20.333C47.833,53.667,47,55.5,47,56.5c0,1.5,1.333,2.667,2.333,2.667 C54.35,55.19,62,44.422,62,32C62,15.432,48.568,2,32,2z" />
        <circle cx="20" cy="24" r="3" />
        <circle cx="28" cy="18" r="3" />
        <circle cx="36" cy="24" r="3" />
        <circle cx="36" cy="32" r="3" />
        <circle cx="28" cy="38" r="3" />
      </svg>
    ),
    title: "Painting Classes",
    paragraph:
      "Discover a spectrum of techniques from acrylics to watercolors under the guidance of our experienced instructor. Perfect for all skill levels.",
  },
  {
    id: 2,
    icon: (
      // Pencil icon for drawing
      <svg
        width="40"
        height="40"
        viewBox="0 0 64 64"
        className="fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2 62l14-4 32-32L34 10 2 42zM60.707 5.293c1.562-1.562 1.562-4.094 0-5.656L59.363-.707c-1.562-1.562-4.094-1.562-5.656 0l-3.293 3.293 8 8L60.707 5.293z" />
      </svg>
    ),
    title: "Drawing & Illustration",
    paragraph:
      "Learn to capture beauty with traditional sketching and illustration techniques that emphasize classical methods.",
  },
  {
    id: 3,
    icon: (
      // Sculpture icon
      <svg
        width="40"
        height="40"
        viewBox="0 0 64 64"
        className="fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 52l8-8 24 24-8 8H12v-24zm48-44l-8-8c-1.562-1.562-4.094-1.562-5.656 0L30 29.686l13.657 13.657L72 21.657c1.562-1.562 1.562-4.094 0-5.656z" />
      </svg>
    ),
    title: "Sculpture Workshops",
    paragraph:
      "Shape your imagination into tangible art with hands-on workshops that focus on traditional sculpture techniques and materials.",
  },
  {
    id: 4,
    icon: (
      // Brush icon for mixed media
      <svg
        width="40"
        height="40"
        viewBox="0 0 64 64"
        className="fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M54 10L10 54c-2.209 2.209-2.209 5.791 0 8 2.209 2.209 5.791 2.209 8 0l44-44c2.209-2.209 2.209-5.791 0-8-2.209-2.209-5.791-2.209-8 0zM20 44l-4 4 4 4 4-4-4-4z" />
      </svg>
    ),
    title: "Mixed Media Exploration",
    paragraph:
      "Experiment with traditional materials and techniques to create unique mixed media artworks that celebrate classic craftsmanship.",
  },
  {
    id: 5,
    icon: (
      // Classical column icon for art history & critique
      <svg
        width="40"
        height="40"
        viewBox="0 0 64 64"
        className="fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="26" y="10" width="12" height="44" />
        <path d="M20 10h24v4H20zM16 54h32v4H16z" />
        <path d="M22 4h20v6H22zM22 58h20v6H22z" />
      </svg>
    ),
    title: "Art History & Critique",
    paragraph:
      "Engage in thoughtful discussions and critiques that deepen your appreciation for traditional art, inspiring your creative journey.",
  },
];
