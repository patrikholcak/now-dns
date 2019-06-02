import { htm } from "@zeit/integration-utils";

interface ImageProps {
  src: string;
  width: number | string;
  height: number | string;
  cover?: boolean;
}

const Image = ({ src, cover, width = 100, height = width }: ImageProps) => {
  const styles = {
    display: "inline-block",
    width: `${width}px`,
    height: `${height}px`,
    background: `no-repeat top left url(${src})`,
    backgroundSize: cover ? 'cover' : undefined,
  };

  return htm`
    <Box ...${styles} />
  `;
};

export default Image;
