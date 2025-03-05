import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUser } from "../../features/user/userThunk";

const Users = () => {
  const userInfo = useSelector((state) => state.user.usersInfo);
  const dispatch = useDispatch();
  console.log(userInfo);

  useEffect(() => {
    dispatch(getAllUser());
  }, []);
  //username
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {userInfo.length > 0 ? (
        userInfo?.map((item, i) => (
          <>
            <ListItem alignItems="flex-start" key={item.id}>
              <ListItemAvatar>
                <Avatar
                  alt={
                    item.username
                      ? item.username[0].toUpperCase()
                      : "Remy Sharp"
                  }
                  src="/static/images/avatar/1.jpg"
                />
              </ListItemAvatar>
              ``
              <ListItemText
                primary={item.username}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: "text.primary", display: "inline" }}
                    >
                      offline
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))
      ) : (
        <>
          <p>no users found</p>
        </>
      )}
    </List>
  );
};

export default Users;
