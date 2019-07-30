export interface DataCompomnent {
  ShortCode: string;
  DisplayTypeShortCode: string;
  Label: string;
  RenderAsMobile: boolean;
  Value: string;
  IsDirty: boolean;
}


export interface FormProps {
    payload: any;
    components: any;
    onChange: any;
}
