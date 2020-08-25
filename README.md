# Deployed API
https://be-lambda-kickstarter-success.herokuapp.com/

# Register / Login Endpoints
| Request | URL | Description |
| ------- | --- | ----------- |
| POST | /api/auth/register | register a new user |
| POST | /api/auth/login | login a user |

# Campaign Endpoints -- authentication required
| Request | URL | Description |
| ------- | --- | ----------- |
| GET | api/campaigns | get all campaigns in the database |
| GET | api/campaigns/:id | get campaign with specific id |
| PUT | api/campaigns/:id | edit specific campaign |
| DELETE | api/campaigns/:id | delete specific campaign |

# Review Endpoints -- authentication required
| Request | URL | Description |
| ------- | --- | ----------- |
| GET | api/reviews/:id | get campaign review with a specific ID (this ID is the campaign_id) |
| POST | api/reviews | post a review for a campaign |
| DELETE | api/reviews/:id | deletes a specific review |

# Users
| Name | Type | Required | Unique | Notes |
| ---- | ---- | -------- | ------ | ----- |
| username | string | yes | yes | username |
| password | string | yes | no | password |

# Campaigns
| Name | Type | Required | Unique | Notes |
| ---- | ---- | -------- | ------ | ----- |
| user_id | integer | yes | no | references user who posted campaign |
| monetary_goal | integer | yes | no | campaign monetary goal in USD |
| description | string | yes | no | campaign description |
| title | string | yes | no | campaign title |
| launch_date | string | yes | no | campaign start date MM/DD/YYYY format |
| finish_date | string | yes | no | campaign finish date MM/DD/YYYY format |
| category | string | yes | no | catagory kickstarter fits in |

# Reviews
| Name | Type | Required | Unique | Notes |
| ---- | ---- | -------- | ------ | ----- |
| campaign_id | integer | yes | yes | references a campaign that the review goes to |
| review | integer | yes | no | a review given to that campaign |
