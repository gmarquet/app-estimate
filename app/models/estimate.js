import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
  email: attr('string'),
  locale: attr('string'),
  daily_cost: attr('number'),
  delivery_time: attr('number'),
  total_duration: attr('number'),
  full_price: attr('number'),
  total_price: attr('number'),
  discout_percent: attr('number'),
  discout_value: attr('number'),
  answers: attr('json'),

  setAnswersFromQuestions(questions){
    let array = questions.filterBy('hasOneAnswer', true).map(function(q){
      return  {
        title_fr: q.get("title_fr"),
        title_en: q.get("title_en"),
        answers : q.get('answers').filterBy("selected", true).map(function(a){
          return {
            title_fr: a.get('title_fr'),
            title_en: a.get('title_en'),
            totalDuration: a.get('totalDuration'),
          }
        }),
      };
    });
    return this.set('answers', array);
  }
});
