# Managing Organisations and Users

When the new user is visible in the dropdown, click the user and select an access level. The chosen access level decides what the new user is allowed to do inside the organisation. *Read* users are only allowed to view the organisation, while *Administrator* users are allowed to add new users and delete the entire organisation and all logs beneath it. The access level set on the user in the organisation, will become the users access level on all new logs inside that organisation as well. Let's add a new user to the organisation:

![Add User to Organisation](images/add_user_to_org.png)

To change the access level on an already added user, click one of the grouped buttons to the right of the users name. Changing a users access level on the organisation wont change the users access level on each log. To delete a user from the organisation, click the dropdown to the far right and select *Remove from organisation*.

When a user is added to an organisation, the user will automatically have access to all new logs created in that organisation. For security reasons, a new user added to the organisatiom, will not have access to existing logs in the organisation. To assign the new user to all existing logs, click the dropdown next to the user and select *Add to all logs*. This will set the access level on all existing logs to the same level as specified on the user in the organisation. If the user is already added to one or more logs, the access level wont change on these logs when clicking *Add to all logs*.

## Adding users to a log

When added to the organisation, a user can be given different levels of access to each log. As mentioned above, all users inside the organisation will automatically have the same access level on each new logs, as configured on the user in the organisation.

To manage users on a log, hover the log on either the left menu or on the dashboard and click the gear icon. This will take you to the log settings page:

![Manage Users on Log](images/admin_users_on_log.png)

Both users in the organisation are now available on the log. Since I chose an existing log, the new user added to the organisation wont have access, indicated with the pressed *None* button. To assign the new user to this log, click one of the other grouped buttons.

Like in the organisation settings, different access levels are available for users on a log. It's perfectly fine to change this, since you probably want users with only *Read* access on the organisation level, but *Write* or *Administrator* access to one or more logs. Being *Administrator* on a log, means that the user is able to perform user administration and other "dangerous" functions on that log.

> Awarding a user *Administrator* on a log, doesn't give them *Administrator* rights on the organisation.