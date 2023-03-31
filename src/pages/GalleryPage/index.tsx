import { Gallery } from '../../components/Gallery';
import { BaseLayout } from '../../Layout/BaseLayout';


export function GalleryPage() {
  return (
    <BaseLayout appBarTitle='Galeria'>
      <Gallery />
    </BaseLayout>
  )
}