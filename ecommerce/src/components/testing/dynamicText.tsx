"use client"


const DynamicText = (props: any) => {

  return (
    <div style={{minHeight: "10px"}}>
      {props.textBlocks?.map((block:any, i:number) => {
        return (<div key={`block-${i}`}>{block.prefixText} {block.dynamicText} {block.suffixText}</div>)
      })}
      
    </div>
  );
};

export default DynamicText;


