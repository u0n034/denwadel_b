import { PhoneCall, Clock, Shield, DollarSign, Calendar } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: PhoneCall,
    title: "効率的な電話対応",
    description: "経験豊富なスタッフが迅速かつ丁寧に対応し、顧客満足度を向上させます。"
  },
  {
    icon: Clock,
    title: "折り返し電話対応",
    description: "重要な折り返し電話も確実に対応し、ビジネスチャンスを逃しません。"
  },
  {
    icon: Shield,
    title: "迷惑電話・詐欺電話のブロック",
    description: "迷惑電話や詐欺電話を自動的にブロックし、安心して業務に集中できます。"
  },
  {
    icon: DollarSign,
    title: "圧倒的なコストパフォーマンス",
    description: "月額2,980円というリーズナブルな価格で、専任スタッフを雇用するコストを大幅に削減できます。"
  },
  {
    icon: Calendar,
    title: "柔軟な対応",
    description: "月額プランには15コールが含まれ、超過分も平日9時から19時に対応可能です。"
  }
] as const;