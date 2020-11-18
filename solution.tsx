import * as React from 'react';

const ALL_NAMES = ["foo", "bar", "baz"];

interface NameListItemProps {
  readonly name: string;
  readonly onNameClick: (clickedName: string) => void;
}

export const NameListItem: React.FC<NameListItemProps> = (props: NameListItemProps) => (
  <li>
    <button 
      onClick={() => props.onNameClick(props.name)}
    >
      {props.name}
    </button>
  </li>
);

export const NameList: React.FC = () => {
  const [lastClickedName, setLastClickedName] = React.useState<string | undefined>(undefined);
  
  const onNameClick = (clickedName: string) => {
      setLastClickedName(clickedName); // The lastClickedName state updated for every clicked on each NameListItem
  };

  // NOTE: This is the indicator that the lastClickedName was populated only once for every clicked on each NameListItem
  // React.useEffect(() => {
  //   if (lastClickedName) {
  //     console.log(lastClickedName);
  //   }
  // }, [lastClickedName]);

  return (
    <div>
      <h1>
        {/* I modified the proper validation of displaying the result */}
        {!Boolean(lastClickedName) && "No Name Clicked Yet"}
        {Boolean(lastClickedName) && lastClickedName}
      </h1>
      <ul>
        {ALL_NAMES.map((name: string, idx: number) => (
          <NameListItem key={idx} name={name} onNameClick={onNameClick} />
        ))}
      </ul>
    </div>
  );
};
