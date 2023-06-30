import styled from "styled-components";

type Props = {
  src?: string;
  alt?: string;
  size?: number;
  text?: string;
};

const AvatarContainer = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => (size ? `${size}px` : "50px")};
  height: ${({ size }) => (size ? `${size}px` : "50px")};
  border-radius: 50%;
  background-color: #ccc;
  color: #000;
  font-size: ${({ size }) => (size ? `${size * 0.4}px` : "20px")};
`;

const Image = styled.img<Props>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const Avatar = ({ src, alt, size, text }: Props) => {
  return (
    <AvatarContainer size={size}>
      {src ? <Image src={src} alt={alt || "Avatar"} /> : text}
    </AvatarContainer>
  );
};

export default Avatar;
