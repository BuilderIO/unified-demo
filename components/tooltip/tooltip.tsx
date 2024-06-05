import * as React from 'react';
import { BuilderElement, BuilderBlockComponent } from '@builder.io/react';
// import MuiTooltip from '@material-ui/core/Tooltip';
import MuiTooltip from '@mui/material/Tooltip';

interface Props {
  builderBlock?: BuilderElement;
  text: string;
  placement?: string;
}

export function Tooltip({ builderBlock, text, placement }: Props) {
    return (
      <MuiTooltip title={text}>
        <span>
          {/* TODO: this should be BuilderBlocks */}
             {builderBlock &&
             builderBlock.children &&
             builderBlock.children.map((block, index) => (
              <BuilderBlockComponent key={block.id} block={block} />
            ))}
        </span>
      </MuiTooltip>
    );
  }
