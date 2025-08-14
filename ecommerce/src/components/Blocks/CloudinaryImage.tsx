"use client";

const CloudinaryImage = (props: any) => {
    if (!props.cloudinaryOptions) {
        return 'Choose an Image'
      }
      return (
        <img
          src={props.cloudinaryOptions.url}
          width={props.cloudinaryOptions.width}
          height={props.cloudinaryOptions.height}
          alt={props.cloudinaryOptions.alt || props.cloudinaryOptions.title || "Image"}
        />
      )
}

export default CloudinaryImage;
