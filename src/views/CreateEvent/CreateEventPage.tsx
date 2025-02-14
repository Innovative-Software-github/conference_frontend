import * as React from 'react'

import { MovingLabelsBar } from '../../components/MovingLabelsBar/MovingLabelsBar'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { SplitContainer } from '../../ui/SplitContainer/SplitContainer'
import { CoverPhotoUploader } from './components/CoverPhotoUploader/CoverPhotoUploader'
import { TagSelector } from './components/TagSelector/TagSelector'
import { ConstraintContainer } from '../../ui/ConstraintContainer/ConstaintContainer'

export const CreateEventPage: React.FC = () => (
  <div>
    <MovingLabelsBar />
    <Header />
    <main>
      <ConstraintContainer>
        <SplitContainer
          title='Предложить событие'
          leftContent={<CoverPhotoUploader />}
          rightContent={<TagSelector />}
        />
      </ConstraintContainer>
    </main>
    <Footer />
  </div>
)
