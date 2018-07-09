import Route from '@ember/routing/route';

export default Route.extend({

  model(){
    // this.get('store').pushPayload({
    //     questions :[
    //       { id: 1,
    //         title: "Question 1 : dsqdsqdqsdq",
    //         image: '',
    //         multiple: false,
    //         description: '',
    //         // answers: [
    //         //   {text:"dsqdsq"}
    //         // ]
    //       },
    //     ]
    // });

    return this.get('store').findAll('question');
  }
});
