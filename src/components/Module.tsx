import * as Collapsible from '@radix-ui/react-collapsible';
import { ChevronDown} from "lucide-react";
import { Lesson } from "./Lesson";

interface ModuleProps{
	title: string
	moduleIndex: number
	amountOfLessons: number
}

export function Module({title, moduleIndex, amountOfLessons}: ModuleProps){
	return(
		<Collapsible.Root className="group">
			<Collapsible.Trigger className="flex w-full items-center  gap-3 bg-zinc-800 p-4">
				<div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
					{moduleIndex + 1}
				</div>
				<div className="flex flex-col gap-1 text-left">
					<strong className="text-sm">
						{title}
					</strong>
					<span className="text-xs text-zinco-400">{amountOfLessons}classes</span>
				</div>
				<ChevronDown className="w-5 h-5 ml-auto text-zinc-400group-data-[state=open]:rotate-180 transition-transform" />
			</Collapsible.Trigger>
			<Collapsible.Content>
				<nav className="relative flex flex-col gap-4 p-6">
					<Lesson title="Redux fundamentals" duration="06:09"/>
					<Lesson title="Zustand fundamentals" duration="08:11"/>
					<Lesson title="Jatai fundamentals" duration="07:07"/>
				</nav>
			</Collapsible.Content>
		</Collapsible.Root>
	)
}