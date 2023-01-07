export interface Props {
    overview:boolean;
    structure:boolean;
    surface:boolean;
    sourceText:boolean;

     setSourceText: React.Dispatch<React.SetStateAction<boolean>>;
    setOverview: React.Dispatch<React.SetStateAction<boolean>>;
    setStructure: React.Dispatch<React.SetStateAction<boolean>>;
    setSurface: React.Dispatch<React.SetStateAction<boolean>>;

    
   
   
}
