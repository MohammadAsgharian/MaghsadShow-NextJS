import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

function ButtonLoader(props) {
  return (
    <Button
      variant={props.variant}
      type={props.type}
      disabled={props.loading ? true : false}
    >
      {props.loading && <CircularProgress size={14} />}
      {!props.loading && props.title}
    </Button>
  );
}

export default ButtonLoader;
