import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Module } from "../components/Module";
import { MessageCircle } from "lucide-react";
import { useAppSelector } from "../store";
import { useCurrentLesson } from "../store/Slice/player";
import { useEffect } from "react";

export function Player(){
  const modules = useAppSelector(state =>{
    return state.player.course.modules
  })
  const { currentLesson } = useCurrentLesson()

  useEffect(() => {
    document.title = `Watching: ${currentLesson.title}`
  }, [currentLesson]);
	return(
		<div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
           <Header />
          <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600">
            <MessageCircle className="w-4 h-4" />
            Give a feedback
          </button>
        </div>

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
         <Video />
          <aside className="w-80 divide-y-2 divide-zinc-900 absolute top-0 bottom-0 right-0 border-l border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 scrollbar-thumb-rounded-lg">
          {
          modules.map((module, index) => {
            return(
              <Module 
                key={module.id} 
                moduleIndex={index} 
                title={module.title} 
                amountOfLessons={module.lessons.length}
              />
            )
            })}
          </aside>
        </main>
      </div>
    </div>
	)
}