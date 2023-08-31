export type PostByIdType = {
  id: number
  description: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location?: any // TODO
  images: PostByIdImages[]
  createdAt: string
  updatedAt: string
}
export type PostByIdImages = {
  url: string
  width: number
  height: number
  fileSize: number
  uploadId: string
}
