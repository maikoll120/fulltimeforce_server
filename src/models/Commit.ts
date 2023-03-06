export default interface Commit {
  node_id: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    };
  };
}
