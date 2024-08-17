
// const posts = [{
//     "userId": 1,
//     "id": 17,
//     "title": "fugit voluptas sed molestias voluptatem provident",
//     "body": "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo"
// },
// {
//     "userId": 2,
//     "id": 18,
//     "title": "voluptate et itaque vero tempora molestiae",
//     "body": "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam"
// },
// {
//     "userId": 3,
//     "id": 19,
//     "title": "adipisci placeat illum aut reiciendis qui",
//     "body": "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas"
// }

import { Post, User } from "./models";
import { connectToDB } from "./utils";

// ];

// const users = [
//     {
//         "id": 1,
//         "name": "Leanne Graham",
//         "username": "Bret",
//         "email": "Sincere@april.biz",
//         "address": {
//             "street": "Kulas Light",
//             "suite": "Apt. 556",
//             "city": "Gwenborough",
//             "zipcode": "92998-3874",
//             "geo": {
//                 "lat": "-37.3159",
//                 "lng": "81.1496"
//             }
//         },
//         "phone": "1-770-736-8031 x56442",
//         "website": "hildegard.org",
//         "company": {
//             "name": "Romaguera-Crona",
//             "catchPhrase": "Multi-layered client-server neural-net",
//             "bs": "harness real-time e-markets"
//         }
//     },
//     {
//         "id": 2,
//         "name": "Ervin Howell",
//         "username": "Antonette",
//         "email": "Shanna@melissa.tv",
//         "address": {
//             "street": "Victor Plains",
//             "suite": "Suite 879",
//             "city": "Wisokyburgh",
//             "zipcode": "90566-7771",
//             "geo": {
//                 "lat": "-43.9509",
//                 "lng": "-34.4618"
//             }
//         },
//         "phone": "010-692-6593 x09125",
//         "website": "anastasia.net",
//         "company": {
//             "name": "Deckow-Crist",
//             "catchPhrase": "Proactive didactic contingency",
//             "bs": "synergize scalable supply-chains"
//         }
//     },
//     {
//         "id": 3,
//         "name": "Ervin Howell",
//         "username": "Anto3333",
//         "email": "Shanna@melissa.tv",
//         "address": {
//             "street": "Victor Plains",
//             "suite": "Suite 879",
//             "city": "Wisokyburgh",
//             "zipcode": "90566-7771",
//             "geo": {
//                 "lat": "-43.9509",
//                 "lng": "-34.4618"
//             }
//         },
//         "phone": "010-692-6593 x09125",
//         "website": "anastasia.net",
//         "company": {
//             "name": "Deckow-Crist",
//             "catchPhrase": "Proactive didactic contingency",
//             "bs": "synergize scalable supply-chains"
//         }
//     },
// ];

export const getPosts = async () => {
    // return posts;
    try {
        connectToDB();
        const posts = await Post.find();
        return posts;
    } catch (error) {
        console.log(error, 'fail to fetch posts')
    }
}

export const getPost = async (slug) => {
    // return posts.find((post) => post.id == parseInt(slug));
    try {
        connectToDB();
        const post = await Post.findOne(slug);
        return post;
    } catch (error) {
        console.log(error, 'fail to fetch post')
    }
}

export const getUser = async (userId) => {
    //return users.find((user) => user.id == parseInt(userId));
    try {
        connectToDB();
        const user = await User.findOne(userId);
        return user;
    } catch (error) {
        console.log(error, 'fail to fetch user')
    }
}

export const getUsers = async () => {
    try {
        connectToDB();
        const users = await User.find();
        return users;
    } catch (error) {
        console.log(error, 'fail to fetch users')
    }
}

