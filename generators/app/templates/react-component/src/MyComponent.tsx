/**
 * Declare your Prop Types here
 */
type <%= component %>Props = {
  /**
   * Title injected in my component
   */
  title: string
};

export const <%= component %> = ({title}: <%= component %>Props) => {
  return (<div>{title}</div>);
}
