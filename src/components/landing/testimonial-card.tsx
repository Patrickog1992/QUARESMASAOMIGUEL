import { ThumbsUp } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

export type Testimonial = {
  id: number;
  name: string;
  username?: string;
  avatarUrl: string;
  avatarHint: string;
  text: string;
  likes: number;
  time: string;
  replies?: Testimonial[];
};

type TestimonialCardProps = {
  testimonial: Testimonial;
  isReply?: boolean;
};

export function TestimonialCard({ testimonial, isReply = false }: TestimonialCardProps) {
  const { name, username, avatarUrl, avatarHint, text, likes, time, replies } = testimonial;

  return (
    <div className={cn('flex items-start gap-3 w-full', isReply && 'pt-4')}>
      <Avatar className="h-10 w-10 shrink-0">
        <AvatarImage src={avatarUrl} alt={name} data-ai-hint={avatarHint}/>
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="bg-secondary rounded-xl p-3">
          <p className="font-bold text-sm text-foreground">
            {name}
            {username && <span className="text-muted-foreground font-normal ml-2">{username}</span>}
          </p>
          <p className="mt-1 text-sm text-foreground/90">{text}</p>
        </div>
        <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1 px-2">
          <button className="hover:underline font-bold">Curtir</button>
          <span aria-hidden="true">·</span>
          <button className="hover:underline font-bold">Responder</button>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <ThumbsUp className="h-3 w-3 text-primary" />
            {likes.toLocaleString('pt-BR')}
          </span>
          <span aria-hidden="true">·</span>
          <span>{time}</span>
        </div>
        
        {replies && replies.length > 0 && (
          <div className="mt-2">
            {replies.map(reply => (
              <TestimonialCard key={reply.id} testimonial={reply} isReply={true} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
