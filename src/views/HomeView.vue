
<!-- 

  Todo
    Todo Header
      - header Name
      - Header Buttons
        -Add Button
        -Menu Button
    
    Todo Card
      - Todos Icon + name
      - Todos badges
      - Todos Card Footer
      - Todos User + update Date
        - Todos actions

    Todo Footer
      - Add Todo Button

Icons height: 24px;

 -->

<template>
  <div class="wrapper">
      <div class="content">
        <div class="todos">
            <!-- To do -->
            <div class="todo__header">
              <div class="todo__title">To do</div>
              <div class="todo__actions">
                <button><i class="fa-solid fa-circle-plus"></i></button>
                <button><i class="fa-solid fa-ellipsis"></i></button>
              </div>
            </div>

            <SizedBox :height="20"/>

            <!-- List of Cards here -->
            <div class="card__list">
            <div class="card">
              <div class="card__header">
                <div class="card__title">
                  <div class="card__title__prepend">
                    <i class="fa-regular fa-circle-check"></i>
                    <!-- <i class="fa-regular fa-hourglass"></i> -->
                  </div>
                  <span>Contact client for outlining</span>
                </div>
              </div>

              <SizedBox :height='10'/>

              <div class="card__body">
                <div class="card__badges">
                  <Badge title="High"/>
                  <Badge title="Off Track"/>
                </div>
              </div>

              <SizedBox :height='40'/>

              <div class="card__footer">
                <div class="card__progress">
                    <img src="https://i.pravatar.cc/300" style="width: 35px; height: 35px; border-radius: 50%;"/>
                    <div class="date_started">12-14 Jul</div>
                </div>
                <div class="card__other">
                  2 <i class="fa-solid fa-code-merge"></i> <i class="fa-solid fa-play"></i>
                </div>
              </div>

            </div> 

            <div class="card">
              <div class="card__header">
                <div class="card__title">
                  <div class="card__title__prepend">
                    <i class="fa-regular fa-circle-check"></i>
                    <!-- <i class="fa-regular fa-hourglass"></i> -->
                  </div>
                  <span>Contact client for outlining</span>
                </div>
              </div>

              <SizedBox :height='10'/>

              <div class="card__body">
                <div class="card__badges">
                  <Badge title="Medium"/>
                  <Badge title="At Risk"/>
                </div>
              </div>

              <SizedBox :height='40'/>

              <div class="card__footer">
                <div class="card__progress">
                    <img src="https://i.pravatar.cc/300" style="width: 35px; height: 35px; border-radius: 50%;"/>
                    <div class="date_started">12-14 Jul</div>
                </div>
                <div class="card__other">
                  2 <i class="fa-solid fa-code-merge"></i> <i class="fa-solid fa-play"></i>
                </div>
              </div>

            </div> 

            <div class="card">
              <div class="card__header">
                <div class="card__title">
                  <div class="card__title__prepend">
                    <i class="fa-regular fa-circle-check"></i>
                    <!-- <i class="fa-regular fa-hourglass"></i> -->
                  </div>
                  <span>Contact client for outlining</span>
                </div>
              </div>

              <SizedBox :height='10'/>

              <div class="card__body">
                <div class="card__badges">
                  <Badge title="Low"/>
                  <Badge title="On Track"/>
                </div>
              </div>

              <SizedBox :height='40'/>

              <div class="card__footer">
                <div class="card__progress">
                    <img src="https://i.pravatar.cc/300" style="width: 35px; height: 35px; border-radius: 50%;"/>
                    <div class="date_started">12-14 Jul</div>
                </div>
                <div class="card__other">
                  2 <i class="fa-solid fa-code-merge"></i> <i class="fa-solid fa-play"></i>
                </div>
              </div>

            </div> 
            <!--end of card-->
            </div>
            <SizedBox :height="10"/>
            <!-- To do Footer -->
            <div class="todo__footer">
              <div class="todo__footer__actions">
                  <button class="button">
                      <div class="button__prepend">
                        <i class="fa-solid fa-circle-plus"></i>
                      </div>
                        Add Task
                  </button>
              </div>
            </div>
        </div>
        <div class="todos">
            <!-- To do -->
            <div class="todo__header">
              <div class="todo__title">Doing</div>
              <div class="todo__actions">
                <button><i class="fa-solid fa-circle-plus"></i></button>
                <button><i class="fa-solid fa-ellipsis"></i></button>
              </div>
            </div>

            <SizedBox :height="20"/>

            <!-- List of Cards here -->
            <div class="card__list">
            <div class="card">
              <div class="card__header">
                <div class="card__title">
                  <div class="card__title__prepend">
                    <i class="fa-regular fa-circle-check"></i>
                    <!-- <i class="fa-regular fa-hourglass"></i> -->
                  </div>
                  <span>Contact client for outlining</span>
                </div>
              </div>

              <SizedBox :height='10'/>

              <div class="card__body">
                <div class="card__badges">
                  <Badge title="High"/>
                  <Badge title="Off Track"/>
                </div>
              </div>

              <SizedBox :height='40'/>

              <div class="card__footer">
                <div class="card__progress">
                    <img src="https://i.pravatar.cc/300" style="width: 35px; height: 35px; border-radius: 50%;"/>
                    <div class="date_started">12-14 Jul</div>
                </div>
                <div class="card__other">
                  2 <i class="fa-solid fa-code-merge"></i> <i class="fa-solid fa-play"></i>
                </div>
              </div>

            </div> 

            <div class="card">
              <div class="card__header">
                <div class="card__title">
                  <div class="card__title__prepend">
                    <i class="fa-regular fa-circle-check"></i>
                    <!-- <i class="fa-regular fa-hourglass"></i> -->
                  </div>
                  <span>Contact client for outlining</span>
                </div>
              </div>

              <SizedBox :height='10'/>

              <div class="card__body">
                <div class="card__badges">
                  <Badge title="Medium"/>
                  <Badge title="At Risk"/>
                </div>
              </div>

              <SizedBox :height='40'/>

              <div class="card__footer">
                <div class="card__progress">
                    <img src="https://i.pravatar.cc/300" style="width: 35px; height: 35px; border-radius: 50%;"/>
                    <div class="date_started">12-14 Jul</div>
                </div>
                <div class="card__other">
                  2 <i class="fa-solid fa-code-merge"></i> <i class="fa-solid fa-play"></i>
                </div>
              </div>

            </div> 

            <div class="card">
              <div class="card__header">
                <div class="card__title">
                  <div class="card__title__prepend">
                    <i class="fa-regular fa-circle-check"></i>
                    <!-- <i class="fa-regular fa-hourglass"></i> -->
                  </div>
                  <span>Contact client for outlining</span>
                </div>
              </div>

              <SizedBox :height='10'/>

              <div class="card__body">
                <div class="card__badges">
                  <Badge title="Low"/>
                  <Badge title="On Track"/>
                </div>
              </div>

              <SizedBox :height='40'/>

              <div class="card__footer">
                <div class="card__progress">
                    <img src="https://i.pravatar.cc/300" style="width: 35px; height: 35px; border-radius: 50%;"/>
                    <div class="date_started">12-14 Jul</div>
                </div>
                <div class="card__other">
                  2 <i class="fa-solid fa-code-merge"></i> <i class="fa-solid fa-play"></i>
                </div>
              </div>

            </div> 
            <!--end of card-->
            </div>
            <SizedBox :height="10"/>
            <!-- To do Footer -->
            <div class="todo__footer">
              <div class="todo__footer__actions">
                  <button class="button">
                      <div class="button__prepend">
                        <i class="fa-solid fa-circle-plus"></i>
                      </div>
                        Add Task
                  </button>
              </div>
            </div>
        </div>
        <div class="todos">
            <!-- To do -->
            <div class="todo__header">
              <div class="todo__title">Done</div>
              <div class="todo__actions">
                <button><i class="fa-solid fa-circle-plus"></i></button>
                <button><i class="fa-solid fa-ellipsis"></i></button>
              </div>
            </div>

            <SizedBox :height="20"/>

            <!-- List of Cards here -->
            <div class="card__list">
            <div class="card">
              <div class="card__header">
                <div class="card__title">
                  <div class="card__title__prepend">
                    <i class="fa-regular fa-circle-check"></i>
                    <!-- <i class="fa-regular fa-hourglass"></i> -->
                  </div>
                  <span>Contact client for outlining</span>
                </div>
              </div>

              <SizedBox :height='10'/>

              <div class="card__body">
                <div class="card__badges">
                  <Badge title="High"/>
                  <Badge title="Off Track"/>
                </div>
              </div>

              <SizedBox :height='40'/>

              <div class="card__footer">
                <div class="card__progress">
                    <img src="https://i.pravatar.cc/300" style="width: 35px; height: 35px; border-radius: 50%;"/>
                    <div class="date_started">12-14 Jul</div>
                </div>
                <div class="card__other">
                  2 <i class="fa-solid fa-code-merge"></i> <i class="fa-solid fa-play"></i>
                </div>
              </div>

            </div> 

            <div class="card">
              <div class="card__header">
                <div class="card__title">
                  <div class="card__title__prepend">
                    <i class="fa-regular fa-circle-check"></i>
                    <!-- <i class="fa-regular fa-hourglass"></i> -->
                  </div>
                  <span>Contact client for outlining</span>
                </div>
              </div>

              <SizedBox :height='10'/>

              <div class="card__body">
                <div class="card__badges">
                  <Badge title="Medium"/>
                  <Badge title="At Risk"/>
                </div>
              </div>

              <SizedBox :height='40'/>

              <div class="card__footer">
                <div class="card__progress">
                    <img src="https://i.pravatar.cc/300" style="width: 35px; height: 35px; border-radius: 50%;"/>
                    <div class="date_started">12-14 Jul</div>
                </div>
                <div class="card__other">
                  2 <i class="fa-solid fa-code-merge"></i> <i class="fa-solid fa-play"></i>
                </div>
              </div>

            </div> 

            <div class="card">
              <div class="card__header">
                <div class="card__title">
                  <div class="card__title__prepend">
                    <i class="fa-regular fa-circle-check"></i>
                    <!-- <i class="fa-regular fa-hourglass"></i> -->
                  </div>
                  <span>Contact client for outlining</span>
                </div>
              </div>

              <SizedBox :height='10'/>

              <div class="card__body">
                <div class="card__badges">
                  <Badge title="Low"/>
                  <Badge title="On Track"/>
                </div>
              </div>

              <SizedBox :height='40'/>

              <div class="card__footer">
                <div class="card__progress">
                    <img src="https://i.pravatar.cc/300" style="width: 35px; height: 35px; border-radius: 50%;"/>
                    <div class="date_started">12-14 Jul</div>
                </div>
                <div class="card__other">
                  2 <i class="fa-solid fa-code-merge"></i> <i class="fa-solid fa-play"></i>
                </div>
              </div>

            </div> 
            <!--end of card-->
            </div>
            <SizedBox :height="10"/>
            <!-- To do Footer -->
            <div class="todo__footer">
              <div class="todo__footer__actions">
                  <button class="button">
                      <div class="button__prepend">
                        <i class="fa-solid fa-circle-plus"></i>
                      </div>
                        Add Task
                  </button>
              </div>
            </div>
        </div>
        <div class="todos">
            <!-- To do -->
            <div class="todo__header">
              <div class="todo__title">Untitled section</div>
              <div class="todo__actions">
                <button><i class="fa-solid fa-circle-plus"></i></button>
                <!-- <button><i class="fa-solid fa-ellipsis"></i></button> -->
              </div>
            </div>

            <SizedBox :height="20"/>

            <!-- To do Footer -->
            <div class="todo__footer no__child">
              <div class="todo__footer__actions">
                  <button class="button">
                      <div class="button__prepend">
                        <i class="fa-solid fa-circle-plus"></i>
                      </div>
                        Add Task
                  </button>
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AddButton from '../components/AddButton.vue'
import SizedBox from '@/components/SizedBox.vue'
import CircularImage from '@/components/CircularImage.vue'
import Badge from '@/components/Badge.vue'

export default {
  name: 'HomeView',
  components: {
    SizedBox,
    CircularImage,
    Badge
},

}
</script>

<style scope lang="scss">
  .wrapper {
    max-width: 1375px;
    margin: 0 auto;

    .content {
      display: flex;
      justify-content: space-between;
      gap: 20px;
    }
  }

  .todos {
    width: calc(100% / 4);

    .todo__header {
      display: flex; 
      justify-content: space-between;
      align-items: center;

      .todo__title {
        font-weight: bold;
        font-size: 24px;
      }

      .todo__actions{
        display: flex;
        gap: 15px;
        justify-content: space-between;

        button{background: none; border: none; font-size: 24px; cursor: pointer;}
      }
    }

    .card__list{
      display: flex;
      gap: 10px;
      flex-direction: column;
    }

    .card {
        padding: 20px;
        border-radius: 12px;
        border: 1px solid #dadada;
        width: 100%;
        min-height: 183px;

        .card__header {

          .card__title {
            display: flex; 
            align-items: center;
            gap: 10px;
            font-weight: bold;
            color: #191919;

            .card__title__prepend {
              font-size: 24px;
            }

            span {
              display: inline-block;
              width: 241px;
              overflow: hidden;
              text-overflow: ellipsis;
              text-align: left;
              font-size: 20px;
              white-space: nowrap;
            }
          }
        }

        .card__body{
            display: block;
            
            .card__badges {
              display: flex;
              justify-content: flex-start;
              flex-wrap: wrap;
              gap: 10px; 

              // .badges {
              //   padding: 5px 10px;
              //   border-radius: 8px;
              //   color: #000;
              //   background: #FDA821;
              //   font-size: 16px;
              // }
            }
        }

        .card__footer{
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #ADADAD;

          .card__progress {
            display: flex;
            gap: 15px;
            justify-content: flex-start;
            align-items: center;
          }

          .card__other {
            // icon COlor: 676767
            
          }
        }
      }

    .todo__footer {
      .todo__footer__actions {
        .button {
          width: 100%;
          height: 45px;
          background: #F9F9F9;
          color: #191919;
          border: 1px dashed #adadad;
          border-radius: 12px;
          font-weight: 600;
          display: flex;
          align-items: center; 
          justify-content: center;
          gap: 10px;
          cursor: pointer;

          .button__prepend {
            font-size: 18px;
          }
        }
      }
    }

    .no__child{

      button {
         min-height: 183px;
         font-size: 18px;
         border: none !important;
      }
    }

  }
</style>
