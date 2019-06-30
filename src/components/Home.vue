<template lang="pug">
  .content-wrapper
    section
      .container
        h1.ui-title-1 Главная
        input(
          type="text"
          placeholder="Что будем смотреть?"
          v-model="taskTitle"
          @keyup.enter="newTask"
        )
        textarea(
          type="text"
          placeholder="Про что кинцо?"
          v-model="taskDescription"
          @keyup.enter="newTask"
        )
        .option-list
          input.what-watch--radio(
            type="radio"
            id="radioFilm"
            value="Фильм"
            v-model="whatWatch"
          )
          label(
            for="radioFilm"
          ) Фильм
          input.what-watch--radio(
            type="radio"
            id="radioSerial"
            value="Сериал"
            v-model="whatWatch"
          )
          label(
            for="radioSerial"
          ) Сериал
        .total_time
          .total_time__film(
            v-if="whatWatch=='Фильм'"
          )
            span Время фильма
          .total_time__serial(
            v-if="whatWatch=='Сериал'"
          )
            span Время сериала
          .tag_list
            .ui-tag__wrapper
              .ui-tag
                span.tag-title GOT
                .button-close
    section
      .container
        .task-list
          .task-item(
            v-for="task in tasks"
            :key="task.id"
            :class="{ completed: task.completed }"
          )
            .ui-card.ui-card--shadow
              .task-item__info
                .task-item__main-info
                  span.ui-label.ui-label--light {{ task.whatWatch }}
                  span Total Time
                span.button-close
              .task-item__content
                .task-item__header
                  .ui-checkbox-wrapper
                    input.ui-checkbox(
                      type='checkbox'
                      v-model="task.completed"
                    )
                  span.ui-title-3 {{ task.title }}
                .task-item__body
                  p.ui-text-regular {{ task.description }}
</template>
<script>
import { isFlowBaseAnnotation } from 'babel-types'
export default {
  data () {
    return {
      taskId: 3,
      taskTitle: '',
      taskDescription: '',
      whatWatch: 'Сериал',
      tasks: [
        {
          'id': 1,
          'title': 'Игра престолов',
          'description': 'К концу подходит время благоденствия, и лето, длившееся почти десятилетие, угасает. Вокруг средоточия власти Семи королевств, Железного трона, зреет заговор, и в это непростое время король решает искать поддержки у друга юности Эддарда Старка. В мире, где все — от короля до наемника — рвутся к власти, плетут интриги и готовы вонзить нож в спину, есть место и благородству, состраданию и любви. Между тем, никто не замечает пробуждение тьмы из легенд далеко на Севере — и лишь Стена защищает живых к югу от нее.',
          'whatWatch': 'Сериал',
          'completed': false,
          'editing': false
        },
        {
          'id': 2,
          'title': 'Мстители. Война без конечностей :)',
          'description': 'Пока Мстители и их союзники продолжают защищать мир от различных опасностей, с которыми не смог бы справиться один супергерой, новая угроза возникает из космоса: Танос. Межгалактический тиран преследует цель собрать все шесть Камней Бесконечности - артефакты невероятной силы, с помощью которых можно менять реальность по своему желанию. Всё, с чем Мстители сталкивались ранее, вело к этому моменту – судьба Земли никогда ещё не была столь неопределённой.',
          'whatWatch': 'Фильм',
          'completed': false,
          'editing': false
        }
      ]
    }
  },
  methods: {
    newTask () {
      if(this.taskTitle==''){
        return
      }else{
      this.tasks.push({
        id: 3,
        title: this.taskTitle,
        description: this.taskDescription,
        whatWatch: this.whatWatch,
        completed: false,
        editing: false
      })

      //Reset 
      this.taskId +=1,
      this.taskTitle = '',
      this.taskDescription = ''
      }
      
    }
  }
}
</script>
<style lang="stylus" scoped>
  .task-item
    margin-bottom 20px
    &:last-child
      margin-bottom 0
  .ui-label
    margin-right 8px
  .task-item__info
    display flex
    align-content center
    justify-content space-between
    margin-bottom 20px
    .button-close
      width 20px
      height @width
  .task-item__header
    display flex
    align-items center
    margin-bottom 18px
    .ui-title-3
      margin-bottom 0
  .ui-checkbox-wrapper
    margin-right 8px
  .option-list
    display flex
  .what-watch--radio
    margin-right 15px
  label
    margin-right 20px
    &:last-child
      margin-right 0
</style>
