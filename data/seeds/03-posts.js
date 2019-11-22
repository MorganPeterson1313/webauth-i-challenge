exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("posts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("posts").insert([
        {
          name: "Body Talk",
          title: "Full Session",
          description:
            "BodyTalk is a simple, safe and astonishingly effective system of integrative health care. BodyTalk is a holistic approach to healing, based on proven principles of energy medicine. ... This allows the body to return to its natural healthy function, effectively responding to injury and illness - as nature intended.",
          imgUrl: "https://quotefancy.com/media/wallpaper/3840x2160/1037731-Olivia-Newton-John-Quote-Let-me-hear-your-body-talk.jpg"
        },
        { name: "Crystals", title: "Starter Kit", description: "A full set of custom crystals to satrt your journey", imgUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQLyxsyCABX2qGdTFyTn-nh1njf1WbZqe4BCwiJAPAGWAK2r83GEfNe3rJvQOGBLbdjAqoSmY1g9_oGlrwY_37xfyo4s6ffkAixdwVZhLCvmoVl-RdTZrtY0w&usqp=CAc" },
        { name: "Crystals", title: "Stone", description: "Purchase a stone I have personally curated for your individualized session", imgUrl: "https://i.etsystatic.com/13015452/r/il/d9eb95/1275014621/il_794xN.1275014621_8931.jpg" },
        { name: "Nutirtion Wellness and Coaching Session", title: "Goal Setting", description: "Set your goals and have one on one individualized planning with accountibility", imgUrl: "https://www.yourtrainingedge.com/wp-content/uploads/2012/01/Fotolia_92321615_Subscription_Monthly_M.jpg" },
        { name: "Community of Mothers, Aunties, and Wise Grands", title:"Mommy Village", description: "It takes a village to raise a child. Mommy village is your personal village to help provide you support when you need it the most. Subscribe to our village below", imgUrl: "https://kidsaregifts.files.wordpress.com/2017/07/f73ced10f5b52382b2b8e1d461fa04aa.jpg" },
      ]);
    });
};
