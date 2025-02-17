<template>
  <AppPage back title="Help">
    <QuestionItem
      v-for="q in questions"
      :key="q.title"
      :question="q">

    </QuestionItem>
  </AppPage>
</template>

<script>
import AppPage from '@/components/ui/AppPage.vue'
import QuestionItem from '@/components/question/QuestionItem.vue';

export default {
  setup() {
    const questions = [
      {title: 'Question one', text: 'Answer one'},
      {title: 'Question two', text: 'Answer two'}
    ]

    return {questions}
  },
  components: {AppPage, QuestionItem}
}
</script>