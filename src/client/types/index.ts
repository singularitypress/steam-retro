export interface IComponent {
  children:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[]
    | (string | JSX.Element)[];
}
