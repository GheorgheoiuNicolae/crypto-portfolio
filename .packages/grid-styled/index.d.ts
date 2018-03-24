declare module 'grid-styled' {
  export class Box extends React.Component<__GridStyled.IBoxProps, any> {}
  export class Grid extends React.Component<__GridStyled.IGridProps, any> {}
  export class Flex extends React.Component<__GridStyled.IFlexProps, any> {}
  export import IBoxProps = __GridStyled.IBoxProps;
  export import IGridProps = __GridStyled.IGridProps;
  export import IFlexProps = __GridStyled.IFlexProps;
}

declare namespace __GridStyled {

  interface IMarginAndPaddings {
    m?: number | string | any[];
    mb?: number | string | any[];
    ml?: number | string | any[];
    mr?: number | string | any[];
    mt?: number | string | any[];
    mx?: number | string | any[];
    my?: number | string | any[];
    p?: number | string | any[];
    pb?: number | string | any[];
    pl?: number | string | any[];
    pr?: number | string | any[];
    pt?: number | string | any[];
    px?: number | string | any[];
    py?: number | string | any[];
    className?: string;
  }

  interface IBoxProps extends IMarginAndPaddings {
    flex?: string;
    style?: any;
    width?: number | string | any[];
  }

  interface IGridProps extends IMarginAndPaddings {
    style?: {};
    width?: number | string | any[];
  }

  interface IFlexProps extends IMarginAndPaddings {
    align?: string;
    column?: boolean;
    justify?: string;
    order?: number;
    style?: any;
    wrap?: boolean;
  }
}
