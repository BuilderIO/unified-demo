'use client';

const BynderImage = (props: BynderImageProps) => {
  let description: string =
    props.bynderAsset?.assets?.[0]?.description ?? 'Bynder Asset';
  let asset =
    props.bynderAsset?.additionalInfo?.selectedFile ??
    props.bynderAsset?.assets?.[0]?.files?.webImage;

  console.log({ description, asset, props });
  if (!props.bynderAsset || !asset) {
    return 'Choose a Bynder Asset';
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={asset.url}
      width={asset.width}
      height={asset.height}
      alt={description}
      style={{
        objectFit: props.imageFit ?? 'inherit',
        // to fix fitting in a flex parent
        minHeight: 0,
        width: '100%',
      }}
    />
  );
};

export default BynderImage;

// types copied from Bynder's package or from the Bynder plugin

interface File {
  url: string;
  width?: number;
  height?: number;
  fileSize?: number;
  isFakeOriginal?: boolean;
}
type AdditionalInfo = {
  selectedFile?: File;
};
type BynderImageProps = {
  bynderAsset: { assets?: BaseAsset[]; additionalInfo?: AdditionalInfo };
  imageFit: 'cover' | 'contain' | 'fill' | 'none';
};

interface BaseAsset extends Record<string, any> {
  __typename: string;
  id: string;
  name: string;
  description: string | null;
  databaseId: string;
  createdAt: string;
  originalUrl: string | null;
  publishedAt: string;
  tags: string[];
  type: string;
  updatedAt: string;
  url: string;
  extensions: string[];
  metaproperties: {
    nodes: any[];
  };
  textMetaproperties: any[]; // You might want to define a more specific type here
  derivatives: {
    thumbnail: string;
    webImage: string;
  };
  files: {
    webImage: File;
    thumbnail: File;
    mini: File;
  };
}
