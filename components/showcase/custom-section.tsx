"use client"

import * as React from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { DicebearAvatar } from "@/components/ui/avatar-dicebear"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bubble } from "@/components/ui/bubble"
import { Marker } from "@/components/ui/marker"
import { Message, MessageContent, MessageAvatar } from "@/components/ui/message"
import { Attachment, AttachmentContent, AttachmentTitle, AttachmentDescription } from "@/components/ui/attachment"
import { Item, ItemTitle, ItemDescription, ItemGroup } from "@/components/ui/item"
import { FileIcon, UserCircleIcon, CheckCircleIcon } from "@s9-labs/solar-icons/line-duotone"

export function CustomSection() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>dicebear avatars (zero letter initials rule)</CardTitle>
          <CardDescription>procedural svg avatars generated through the dicebear api</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-3">
            <DicebearAvatar seed="leethe-1" size="sm" />
            <DicebearAvatar seed="leethe-2" size="md" />
            <DicebearAvatar seed="leethe-3" size="lg" />
            <DicebearAvatar seed="leethe-shapes" avatarStyle="shapes" size={48} />
            <DicebearAvatar seed="leethe-identicon" avatarStyle="identicon" size={48} />
          </div>

          <div className="flex items-center gap-3">
            <Avatar size="lg">
              <AvatarImage src="https://api.dicebear.com/9.x/shapes/svg?seed=apple" />
              <AvatarFallback seed="apple" />
            </Avatar>
            <Avatar size="sm">
              <AvatarFallback seed="subtle" />
            </Avatar>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>brand color tokens</CardTitle>
          <CardDescription>blue-derived midnight palette with almond peach and soft blush highlights</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="flex flex-col gap-1.5 p-3 rounded-[8px] bg-[#0D1F2D]">
            <div className="size-5 rounded-full bg-[#0D1F2D] ring-1 ring-white/10" />
            <span className="text-xs font-medium text-[#FAE1DF]">midnight</span>
            <span className="text-[10px] text-[#9EA3B0]">#0D1F2D</span>
          </div>
          <div className="flex flex-col gap-1.5 p-3 rounded-[8px] bg-[#193146]">
            <div className="size-5 rounded-full bg-[#9EA3B0]" />
            <span className="text-xs font-medium text-[#FAE1DF]">slate blue</span>
            <span className="text-[10px] text-[#9EA3B0]">#9EA3B0</span>
          </div>
          <div className="flex flex-col gap-1.5 p-3 rounded-[8px] bg-[#193146]">
            <div className="size-5 rounded-full bg-[#E4C3AD]" />
            <span className="text-xs font-medium text-[#FAE1DF]">almond peach</span>
            <span className="text-[10px] text-[#9EA3B0]">#E4C3AD</span>
          </div>
          <div className="flex flex-col gap-1.5 p-3 rounded-[8px] bg-[#193146]">
            <div className="size-5 rounded-full bg-[#FAE1DF]" />
            <span className="text-xs font-medium text-[#FAE1DF]">soft blush</span>
            <span className="text-[10px] text-[#9EA3B0]">#FAE1DF</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>messaging, bubbles & markers</CardTitle>
          <CardDescription>asynchronous conversation components</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Marker variant="default">
            <CheckCircleIcon size={14} className="text-[#9EA3B0]" />
            <span className="text-[#9EA3B0]">deployment verified at 00:00 utc</span>
          </Marker>

          <Message align="start" className="flex items-start gap-3">
            <MessageAvatar>
              <DicebearAvatar seed="agent-leethe" size="sm" />
            </MessageAvatar>
            <MessageContent>
              <Bubble variant="secondary" className="rounded-[8px] bg-[#193146] text-[#FAE1DF] p-3 text-xs">
                production cluster update deployed across all edge zones.
              </Bubble>
            </MessageContent>
          </Message>

          <Message align="end" className="flex items-start justify-end gap-3">
            <MessageContent>
              <Bubble variant="default" className="rounded-[8px] p-3 text-xs bg-[#E4C3AD] text-[#0D1F2D] font-medium">
                acknowledged. latency benchmarks looking solid.
              </Bubble>
            </MessageContent>
            <MessageAvatar>
              <DicebearAvatar seed="client-user" size="sm" />
            </MessageAvatar>
          </Message>
        </CardContent>
      </Card>

      <div className="grid gap-6 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>attachments</CardTitle>
            <CardDescription>file payloads and uploads</CardDescription>
          </CardHeader>
          <CardContent>
            <Attachment state="done" className="p-2 rounded-[8px] bg-[#193146]">
              <FileIcon size={20} className="text-[#9EA3B0]" />
              <AttachmentContent>
                <AttachmentTitle className="text-xs text-[#FAE1DF]">build-manifest.json</AttachmentTitle>
                <AttachmentDescription className="text-[10px] text-[#9EA3B0]">12.4 kb</AttachmentDescription>
              </AttachmentContent>
            </Attachment>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>item list elements</CardTitle>
            <CardDescription>structured list rows</CardDescription>
          </CardHeader>
          <CardContent>
            <ItemGroup>
              <Item className="p-3 bg-[#193146] rounded-[8px] border-0">
                <ItemTitle className="text-xs font-medium text-[#FAE1DF]">core license</ItemTitle>
                <ItemDescription className="text-[11px] text-[#9EA3B0]">enterprise software agreement</ItemDescription>
              </Item>
            </ItemGroup>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
