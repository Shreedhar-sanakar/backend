# Backend Assignment 

Name: Sarthak Aggarwal

### How to Run:
```bash
cd backend
npm install
npm start
```
Go to http://localhost:3000/api to access the endpoint

### APIs:
1. POST api/card/colors  
```json
{
    "name": "Bronze",
    "code": "#CD7F32",
    "qualities": {
        "symbolizes": [
            "Strength",
            "Loyalty",
            "Support",
            "Stability"
        ],
        "effects": [
            "soothes",
            "inspires",
            "uplifts",
            "motivates"
        ],
        "positive": [
            "comforting",
            "reliable",
            "elegant",
            "truthful"
        ],
        "negative": [
            "cheap",
            "boastful",
            "uptight",
            "tight-fisted"
        ]
    }
}
```
2. GET api/card/colors
3. POST api/card/save
```json
{
    color_code: "#CD7F32",
    title: "Title",
    description: "Description"
}
```
4. GET api/card/fetch
5. POST api/validatetitle
```json
{
    title: "Title"
}
```
6. POST api/filter
```json
{
    search: "Title Description"
}
    ```