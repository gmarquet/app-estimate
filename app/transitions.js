export default function(){
  // Add your transitions here, like:
    this.transition(
      this.fromRoute('question'),
      this.toRoute('question'),
      this.use('toLeft'),
      this.reverse('toRight')
    );
}
