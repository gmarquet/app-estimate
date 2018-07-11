export default function(){
    this.transition(
      this.fromRoute('index'),
      this.use('toLeft'),
      this.reverse('toRight')
    );
    this.transition(
      this.fromRoute('send-estimate'),
      this.use('toRight'),
      this.reverse('toLeft')
    );
    this.transition(
      this.withinRoute('question'),
      this.debug(),
      this.use('toRight'),
      this.reverse('toLeft')
    );
}
