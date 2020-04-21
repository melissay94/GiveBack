# GiveBack

## Team Members
 - [Dylan Lewis](https://github.com/dlew253)
 - [Shawhien Sohrabi](https://github.com/shawhien)
 - [Solomon Egwuonwu](https://github.com/segwuonwu)
 - [Melissa Young](https://github.com/melissay94)


### Special Thanks to: 
 [Yashoma Boodhan](https://github.com/yboodhan), [Kennan Salisbury](https://github.com/kennansalisbury), [Nick Quandt](https://github.com/nickubed) for helping us overcome some of the challenges with our project and pointing us in the right direction and allowing us to take inspiration from their own project 3: [Meet Out](https://meeting-out.herokuapp.com/) ([GitHub Here](https://github.com/yboodhan/meet-out))


## General Plan
### Problem to Solve: 
Organizing volunteering events can be a handful, you need to reach out and access a lot of different technologies to make it work and get the word out.

### Our Solution:
We are creating a web application that would allow volunteer organizations to create pages and post events to their page, along with the use of a dashboard to keep track of those events and volunteers. Volunteers would also be able to create accounts and then be free to sign up and join various organizations to follow when they create events, or search for events that they want to volunteer for just in general.


### Target Audience:
- Charity Organizations that host events that require volunteers
- People who want to volunteer and make a difference in their community.

#### User Stories
*User Name:* Feed the hungry  
*Role:* Organization  
*Personality:* We are an organization looking for volunteers to help us with our monthly feed the hungry event. We started this organization as a way of giving back to our beloved community and we’ve been doing this for 2 years.  
*How our product helps:* Our product will help connect organizations such as feed the hungry with people who want to volunteer and also give user’s the opportunity to find an organization that they feel comfortable in joining.  

*User Name:* Tina Teenager  
*Role:* User  
*Personality:* I am a senior girl scout going for my bronze badge, and need a certain number of volunteer hours to earn it. I need a way to easily track where I am volunteering, and how many hours I’ve volunteered there.  
*How our product helps:* Our product will list joined organizations and events for the user to view at any time, along with calculating total hours they have already volunteered.  

*User Name:* Tommy Twoshoes  
*Role:* User  
*Personality:* My name is Tommy, I’m a 17 year old high school junior looking to get involved with youth sports coaching and refereeing this summer in the North Seattle area. I moved to the area last spring and was actively involved with Greensboro, NC-area youth soccer organizations.  
*How our product helps:* Charity Organizations that host events to do good and people who want to volunteer and make a difference in their community. Our web application would allow organizations to create pages and post events to their page. Volunteers would also be able to create accounts and then be free to sign up and join various organizations to follow when they create events.  

*User Name:* Paul Peterson  
*Role:* User  
*Personality:*  I am a long standing resident of my community and want to start giving back to help it grow. I am looking for an easy way to find and sign up for volunteering events in my area to start giving back to my community.  
*How our product helps:* Our product will have organizations that will be posting events that are looking for volunteers so that people like Paul can sign up and help their local communities.  

### MVP Scope
- Sign up flow: Volunteers
- Volunteers have a home page with a calendar where their upcoming events and other events from organizations they are following are shown.
- Volunteers can navigate to and edit their user profile
- Volunteers can search for and join organizations
- Volunteers can volunteer for events.
- Events will be seeded in the Back End

### Stretch Goals
1. Sign up flow: Organizations
2. Organizations have a home dashboard that will display summaries such as upcoming events and numbers of volunteers for them.
3. Organizations have an organization page that would be what users see when they navigate to that organization.
4. Organizations can edit their organization page.
5. Organizations can create and edit events.
6. Organizations can send notifications to groups of volunteers using [Messege Bird API](https://messagebird.com/en/).
7. Organizations can validate users after events have occurred. IE give them a badge or a glowing review or something.
8. Orgs can search for users to ask to volunteer based on volunteer interests and reviews(?)

### Tech Stack
1. MongoDB
2. Mongoose
3. Express
4. React
5. Node
6. Material UI
7. SaSS
8. [React Big Calendar](https://github.com/jquense/react-big-calendar)

### Screenshots of Project
###### Landing Page  
![Landing Page](./readme_images/givebackLanding.png)

###### Login Page  
![Login Page](./readme_images/giveBackLogin.png)

###### Dashboard Page - Calendar  
![Dashboard Page](./readme_images/giveBackDashboard.png)

###### Search Page
![Search Page](./readme_images/giveBackSearch.png)

###### Organization Page
![Organization Page](./readme_images/giveBackOrganization.png)

###### Profile Page
![Profile Page](./readme_images/giveBackProfile.png)



### Site Map
![Site Map](./readme_images/project_site_map.png)

### Wire Frames
Landing Page
![Landing Wire Frame](./readme_images/landing_page.png)

Sign Up Page
![Sign Up Wire Frame](./readme_images/signup_page.png)

Login Page
![Login Wire Frame](./readme_images/login_page.png)

User Home Page
![User Home Page Wire Frame](./readme_images/user_home_page.png)

Search Results Page
![Search Results Page](./readme_images/search_results.png)

Organization Dashboard Page
![Organization Dashboard Wire Frame](./readme_images/organization_page.png)

Organization Create Event Page
![Organization Create Event Page](./readme_images/create_event_page.png)

### Routes
| Verb | URL | Action | Description | Redirect? |
|------|-----|--------|-------------|-----------|
| GET | /events | Index | List all volunteer events| No |
| GET | /events/new | New | Form to create new events | No |
| POST | /events | Create | Create a new event from the form | Yes |
| GET | /events/:id | Show | List all information about event | No |
| GET | /events/edit/:id | Edit | Form for editing event information | NO |
| PUT | /events:id | Update | Update event information that was edited | Yes |
| DELETE | /events/:id | Destroy | Delete Event with specific id | Yes |

 ### Models
 User:
 | Field | Type |                    
 |-------|------|
 | First Name | String, required |
 | Last Name | String, required |
 | Email | String, unique, required |
 | Password | String, required |
 | Image |  String, default |
 | Events | Array, String, Event_ids |
 | Organizations | Array, String, Organization_ids |

 Event:
 | Field | Type |                    
 |-------|------|
 | Event Name | String, required |
 | Event Date | String, required |
 | City | String, unique, required |
 | State | String, required |
 | Event Location |  String, required |
 | Webiste | String |
 | Details | String |
 | Volunteers | Array, String, User_ids |

 Organization:
 | Field | Type |                    
 |-------|------|
 | Name | String, required |
 | Email | String, unique, required |
 | Password | String, required |
 | Image |  String, default |
 | Followers | Array, String, User_ids |


## Resources
[Stock Image of Volunteers](https://charity.lovetoknow.com/Examples_of_Volunteerism)
